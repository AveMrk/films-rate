import Star from "./Star";
import {StarsProps} from '../models'
export default function Stars({count}: StarsProps) {
  return (
    <div>
      <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map((n) => (
          <li>
            <Star />
          </li>
        ))}
      </ul>
    </div>
  );
}
Stars.defaultProps = {
  value: 0
}