import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/s960x960/26952100_1587549744705323_8685934949054821982_o.jpg?_nc_cat=103&_nc_ohc=qO4u16qCIMMAX_fBd5X&_nc_ht=scontent-yyz1-1.xx&oh=92ef066c933f93722ed953f1270fe098&oe=5E9058D9" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
