import React,{useState} from 'react';
const seachBar =()=>{




const [searchInput, setSearchInput] = useState("");
const Accesories=[
   {name:Necklaces},
   {name:Earrings},
   {name:Bracelets},
   {name:Rings},

];
const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    Accesories.filter((Accesories) => {
    return Accesories.name.match(searchInput);
});
}
return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
  <table>
  <tr>
    <th>Accesories</th>
  </tr>
  {Accesories.map((Accesories) => {

<div>
  <tr>
    <td>{Accesories.name}</td>
  </tr>
</div>

})}
</table>

</div>
};
export default searchBar;







