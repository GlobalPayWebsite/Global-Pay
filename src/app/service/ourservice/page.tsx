// import EducationalConsultant from "@/components/page/services/others/EducationalConsultant";
// import RealStateConsultant from "@/components/page/services/others/RealStateConsultant";
// import TravelConsultant from "@/components/page/services/others/TravelConsultant";
import SolomonPay from "@/components/page/services/immigration/SolomonPay";
import HalalFood from "@/components/page/services/others/HalalFood";
import BreadCrumb from "@/components/page/shared/breadcrumb/BreadCrumb";

export default function Page() {
    return (
        <div className="m-0 p-0 box-border">
            <BreadCrumb />
            <HalalFood />
            <SolomonPay />
            {/* <RealStateConsultant />
            <EducationalConsultant />
            <TravelConsultant /> */}
        </div>
    );
}
