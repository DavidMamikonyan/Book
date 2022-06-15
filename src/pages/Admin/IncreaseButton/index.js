// // set params when calling the hook
// import { useUpdate } from 'react-admin';
//
// const IncreaseLikeButton = ({ record }) => {
//     const diff = { likes: record.likes + 1 };
//     const [update, { isLoading, error }] = useUpdate(
//         'likes',
//         { id: record.id, data: diff, previousData: record }
//     );
//     const handleClick = () => {
//         update()
//     }
//     if (error) { return <p>ERROR</p>; }
//     return <button disabled={isLoading} onClick={handleClick}>Like</button>;
// };
//
// // set params when calling the update callback
import React from "react";
import { useUpdate, useGetOne } from 'react-admin';
//
//  const { isLoading, data } = useGetOne(
//     "users",
//     { '2' },
//  )
// if (isLoading) return null;


const IncreaseLikeButton = ( props ) => {
    let {record} = props
    console.log(props.record);
    const diff = { likes: record + 1 };
    const [update, { isLoading, error }] = useUpdate();
    const handleClick = (data) => {
        update(
            'users',
            { id: record.id, data: diff, previousData: record }
        )
    }
    if (error) { return <p>ERROR</p>; }
    return <button disabled={isLoading} onClick={handleClick}>Like</button>;
};

export default IncreaseLikeButton