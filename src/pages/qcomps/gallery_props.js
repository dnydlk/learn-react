const person = [
  {
    name: "Katsuko Saruhashi",
    profession: "geochemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "a method for measuring carbon dioxide in seawater",
    imageId: "YfeOqp2",
    imageSize: 70,
  },
  {
    name: "Maria Skłodowska-Curie",
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      " Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "polonium (element)",
    imageId: "szV5sdG",
    imageSize: 70,
  },
]

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={"https://i.imgur.com/" + person.imageId + "s.jpg"}
      alt={person.name}
      width={person.imageSize}
      height={person.imageSize}
    />
  )
}

function Profile({ person }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <Avatar person={person} />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          polonium (element)
        </li>
      </ul>
    </div>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <Profile person={person[0]} />

      <Profile person={person[1]} />
    </div>
  )
}
