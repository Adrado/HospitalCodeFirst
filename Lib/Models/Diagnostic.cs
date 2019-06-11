using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Lib.Models
{
    public class Diagnostic : Entity
    {
        public string Symptoms { get; set; }
        public Guid DoctorId { get; set; }
    }
}
