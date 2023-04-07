import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import database from './firebase';

const TinderCards = () => {

    // eslint-disable-next-line
    const [people, setPeople] = useState([]);
    // {
    //     name: 'Robert Pattinson',
    //     url: 'https://variety.com/wp-content/uploads/2019/11/robert-pattinson-feat-image.jpg?w=681&h=383&crop=1'
    // },
    // {
    //     name: 'Dakota Johnson',
    //     url: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/39/1537788636-dakota-johnson.jpg?crop=0.604xw:0.403xh;0.208xw,0.0577xh&resize=1200:*'
    // }

    useEffect(() => {

        const unsubscribe = database.collection('items').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <div className="cardContainer">
                {people.map(person => (
                    <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']}>
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards