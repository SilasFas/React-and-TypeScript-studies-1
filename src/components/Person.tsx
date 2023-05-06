


interface Person_Info {
    name: string
    email: string
    age: number
    isMarried: boolean
    friends: string[]
    nationality?: string //the question mark indicates that this var is not mandatory to pass
    FavoriteColor: FavoriteColor
}

export enum FavoriteColor { // enum: used when a want to create options
    blue = 'blue',
    red = 'red',
    yellow = 'yellow',
}

// object destructuring
export const Person = ({ name, email, age, isMarried, friends, nationality, FavoriteColor }: Person_Info) => {

    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>E-mail: {email}</h1>
            <h1>Age: {age}</h1>
            <h1>This person {isMarried ? 'is' : 'is not'} married</h1>
            <h1>Nationality: {nationality}</h1>
            <h1>Favorite Color: {FavoriteColor}</h1>
            {friends.map((friend: string, key: number) => (<h1 key={key}>{friend}</h1>))}

        </div>
    )
}
// interface Props {
//     name: string
//     email: string
//     age: number
//     isMarried: boolean
//     friends: string[]
// }

// export const Person = (props: Props) => {

//     return (
//         <div>
//             <h1>Name: {props.name}</h1>
//             <h1>E-mail: {props.email}</h1>
//             <h1>Age: {props.age}</h1>
//             <h1>This person {props.isMarried ? 'is' : 'is not'} married</h1>
//             {props.friends.map((friend: string, key: number) => (
//                 <h1 key={key}>{friend}</h1>
//             ))}
//         </div>
//     )
// }