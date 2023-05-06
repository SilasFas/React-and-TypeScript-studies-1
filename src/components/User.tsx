import { Person } from "./Person"
import { FavoriteColor } from "./Person"

export const User = () => {
    return (
        <div>
            <Person
                name='Silas'
                email='silasfas@hotmail.com'
                age={26}
                isMarried={true}
                friends={['Jessica', 'Jake', 'Jerry', 'Jasmine']}
                nationality="Brazil" // Not mendatory to put
                FavoriteColor={FavoriteColor.yellow}
            />
        </div >
    )
}