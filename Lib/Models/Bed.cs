using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Lib.Models
{
    public class Bed : Entity
    {
        public int Number { get; set; }
        public Guid RoomId { get; set; }
    }
}
