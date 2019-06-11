using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Lib.Models
{
    public class Room : Entity
    {
        public int Number { get; set; }
        public Guid FloorId { get; set; }
    }
}
