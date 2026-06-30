namespace RESTAPI_Practice.Models
{
    public class Developer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public bool isActive { get; set; }

    }

    public class CreateDeveloperDTO
    {
        public string Name { get; set; }
        public int Salary { get; set; }
        public bool isActive { get; set; }

    }
}
