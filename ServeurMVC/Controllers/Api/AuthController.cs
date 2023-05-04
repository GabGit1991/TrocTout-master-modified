// Controller qui gère les actions sur les utilisateurs
using System.IdentityModel.Tokens.Jwt;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api;

[Route("api/[controller]")]

public class AuthController : Controller 
{
    private readonly MaDal db;
    private readonly IMapper mapper;
    private SignInManager<AppUserDAO> signInManager;
    private UserManager<AppUserDAO> userManager;
    private readonly RoleManager<RoleDAO> roleManager;

    public AuthController(

        SignInManager<AppUserDAO> signInManager,
        UserManager<AppUserDAO> userManager,
        RoleManager<RoleDAO> roleManager
        )
    {
        this.signInManager = signInManager;
        this.userManager = userManager;
        this.roleManager = roleManager;
    }



    // POST : /api/Auth
    [HttpPost]
    public async Task<Object> Authentication([FromBody] LoginModel loginModel)
    {
        // Vérification des données envoyées
        if (!ModelState.IsValid)
        {
            return false;
        }

        // Recherche de l'utilisateur

        var user = userManager.Users.FirstOrDefault(c => c.FirstName == loginModel.UserName);

        if (user == null)
        {
            return false;
        }
        // Check de password
        var resultatAuthentification = await this.signInManager.CheckPasswordSignInAsync(
                user, loginModel.Password, false);
        if (!resultatAuthentification.Succeeded)
        {
        
            return false;
        }


        var groups = (await this.userManager.GetRolesAsync(user)).ToArray();

        await this.signInManager.SignInAsync(user, true);

        // Renvoi des infos sur l'utilisateur pour que l'appli puisse gérer l'affichages des élément
        // en conséquence

        return new UserModel() { IdUser = user.IdUser, FirstName = user.FirstName};
    }

}
