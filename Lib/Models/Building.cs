using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Lib.Models
{
    public class Building : Entity
    {
        public string Name { get; set; }
        public string Architect { get; set; }
    }
}
