import {useState} from "react";
import { listAchievement } from "../data";

const Achievements = () => {
    const [showMore, setShowMore] = useState(false);
    const visibleAchievements = showMore? listAchievement : listAchievement.slice(0,4);

    return (
        <div>
            <div className="projects mt-32  text-4xl font-semibold primary-2 bg-clip-text justify-center flex scroll-mt-40 mb-10"> My Achievements</div>
                <div className="container">
                    <div className="achievement-box grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid bg-zinc-950 p-5 gradient-border-container" >{listAchievement.map((achievement) => (
                        <div key={achievement.id} className="bg-zinc-900 flex rounded-xl m-4 items-center p-3 hover:scale-105 smooth border-2 border-zinc-900 hover:border-white hover:border-2">
                            <img src={achievement.tampilan} alt="" className="rounded-full w-[60px] my-auto" />
                            <div className="mx-2">
                                <h2 className=" primary bg-clip-text font-semibold">{achievement.juara}</h2>
                                <p className="text-sm text-gray-500">{achievement.nama}</p>
                            </div>
                    {listAchievement.length > 4 && (
                        <div>
                         <button onClick={()=> setShowMore(!showMore)}>{visibleAchievements? "Show Less":"Show More"}</button>
                        </div>
                    )}
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    )
};

export default Achievements