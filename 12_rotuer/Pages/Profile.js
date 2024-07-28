import { useParams } from "react-router-dom";

const data = {
    velopert:{
        name:'김',
        description:'개발자',
    },
    gildong:{
        name:'홍',
        description:'주인공',    
    }  
    
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username]; //app.js에 있는  username과 같음

    return(
        <div>
            <h1>프로필</h1>
            {profile ? (
                <div>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
                </div>
            ): (  <p>존재하지 않는 프로필입니다.</p>

            )}
           
        </div>
    )
}

export default Profile;