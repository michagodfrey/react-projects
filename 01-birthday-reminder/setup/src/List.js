import React from 'react';

const List = ({people}) => {  
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt="profile pic" />
            <div>
              <h4>{name}</h4>
              <p>{age} years young</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
