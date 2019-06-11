using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Lib.Models
{
    public class Floor : Entity
    {
        public int Number { get; set; }
        public Guid BuildingId { get; set; }
    }
}
