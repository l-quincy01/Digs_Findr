import { IoStarSharp } from "react-icons/io5";

type Comment = {
  name: string;
  campus: string;
  yearsOnDigsFindr: number;
  rating: number;
  date: string;
  text: string;
  image?: string;
};

type CommentsProps = {
  commentsData: Comment[];
};

export default function Comments({ commentsData }: CommentsProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {commentsData.map((comment, index) => (
        <div key={index} className="flex flex-col  p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <img
              className="rounded-full w-16 h-16 object-cover"
              src={
                comment.image ||
                "https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg"
              }
              alt=""
            />
            <div className="ml-4">
              <div className="font-semibold text-lg">{comment.name}</div>
              <div className="text-sm ">{comment.campus}</div>
              <div className="text-sm ">
                {comment.yearsOnDigsFindr} years on Digs Findr
              </div>
            </div>
          </div>
          <div className="mt-2">
            {/* <div className="flex items-center mb-2">
              {[...Array(5)].map((_, starIndex) => (
                <IoStarSharp
                  key={starIndex}
                  className={
                    starIndex < comment.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
              <span className="mx-2 text-sm text-gray-500">· {comment.date}</span>
            </div> */}
            <div className="">{comment.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
