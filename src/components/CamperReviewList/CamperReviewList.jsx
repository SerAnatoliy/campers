import CamperReviewItem from '../../components/CamperReviewItem/CamperReviewItem';
import { ReviewList1 } from './CamperReviewList.module';

const CamperReviewsList = ({ reviews }) => {
  return (
    <div>
      <ReviewList1>
        {reviews && reviews.map((item, index) => <CamperReviewItem key={index} review={item}></CamperReviewItem>)}
      </ReviewList1>
    </div>
  );
};

export default CamperReviewsList;
