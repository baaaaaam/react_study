import {useState,useEffect} from 'react';


export default function usePromise(promiseCreator, deps){
    //대기 중/완료/실패에 대한 상태 관리
    const [loading, setLoading] = usestate(false);
    const [resolved, setResolved] = usestate(null);
    const [error, setError] = usestate(null);

//유의할점 useEffect에 등록하는 함수는 async로 작성하면 안된다는 점 그 대신 함수 내부에 async 함수를 따로 만들어 주어야 함
    useEffect(()=> {
        const process = async () => {
            setLoading(true);
            try{
                const resolved = await promiseCreator();
                setResolved(resolved);
            }catch(e){
                setError(e);
            }

            setLoading(false);
        }
        process();

    },deps);

    return [loading, resolved, error]
}

