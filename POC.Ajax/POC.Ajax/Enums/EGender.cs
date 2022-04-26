using System.ComponentModel.DataAnnotations;

namespace POC.Ajax.Enums
{
    public enum EGender
    {
        [Display(Name = "Male")]
        Male = 0,

        [Display(Name = "Female")]
        Female = 1,

        [Display(Name = "Other")]
        Other = 2
    }
}