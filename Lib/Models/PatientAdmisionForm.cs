using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Lib.Models
{
    public class PatientAdmisionForm : Entity
    {
        public DateTime AdmisionDate { get; set; }
        public DateTime DischargeDate { get; set; }
        public Guid DiagnosticId { get; set; }
        public Guid NurseId { get; set; }
        public Guid DoctorId { get; set; }
        public Guid AreaId { get; set; }
        public Guid PatientId { get; set; }
        public Guid BedId { get; set; }
    }
}
