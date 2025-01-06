import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseCertificateComponent from "./components/CertificateTemplates/CourseCertificateComponent";
import EventCertificateComponent from "./components/CertificateTemplates/EventCertificateComponent";
import WorkShopCertificateComponent from "./components/CertificateTemplates/WorkShopCertificateComponent";
import studentsData from "./data/certificate_data.json";
import EditProfile from "./components/dashboard/EditProfile";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/course" element={<CourseCertificateComponent 
            certificateData={studentsData[0].certificates[1]}
            studentName={studentsData[0].st_name}
            />}
         />
        <Route path="/event" element={<EventCertificateComponent 
            studentName={studentsData[1].st_name}
            certificateData={studentsData[1].certificates[0]}
            />} 
        />
        <Route path="/workshop" element={<WorkShopCertificateComponent 
            studentName={studentsData[0].st_name} 
            certificateData={studentsData[0].certificates[0]}
          />
          } 
        />
        <Route path="/dashboard/editprofile/:st_id" element={<EditProfile />} />
      
      </Routes>
    </Router>
  );
}

export default App;