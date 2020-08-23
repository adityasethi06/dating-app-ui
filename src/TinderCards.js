import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import db from './firebase';


export const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        console.log('useEffect called');
        const unsubscribe = db.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            }))
        })

        return () => {
            unsubscribe();
        }
    }, []);

    console.log(people);
    return (
        <div className='tindercards_container'>
            {people ? people.map(person => (
            <TinderCard
                className="swipe"
                key={person.id}
                preventSwipe={['up', 'down']}>
                <div 
                    style={{ backgroundImage: `url(${person.url})`, color: 'white'}}
                    className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            )) : null}
        </div>
    )
}
