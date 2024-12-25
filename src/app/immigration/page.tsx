
import Details from "@/components/page/shared/details/Details";
import { DetailType } from "@/typing";
import { ImmigrationLawyerDataList } from "@/utils/data/services/immigrationsLawyer";

export default async function page({ searchParams }: { searchParams: { id: string } }) {
    const dataList = ImmigrationLawyerDataList as DetailType[];
    const details = dataList?.find(item => item._id === searchParams?.id) as DetailType;
    return (
        <div className="m-0 p-0 box-border">
            <Details details={details} detailsList={dataList} pageType="immigration" />
        </div>
    )
}

