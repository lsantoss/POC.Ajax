using POC.Ajax.Enums;

namespace POC.Ajax.Models.Customer;

public class CustomerViewModel
{
    public long Id { get; set; }
    public string Name { get; set; }
    public DateTime Birth { get; set; }
    public Gender Gender { get; set; }
}