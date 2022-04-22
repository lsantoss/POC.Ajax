using POC.Ajax.Enums;

namespace POC.Ajax.Models.Customers
{
    public class CustomerViewModel
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public DateTime Birth { get; set; }
        public EGender Gender { get; set; }
    }
}