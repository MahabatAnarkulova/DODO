



interface IDataPizza {
    name: string,
    desc: string,
    img: string,
    price: number
}

const dataPizza : IDataPizza[] = [
    {
        name: 'Peperoni',
        img: 'https://media.dodostatic.net/image/r:292x292/11EE7D5FFC0EE4D5A53D2067EF1E84FA.avif',
        price: 495,
        desc: 'Пепперони из цыпленка, увеличенная порция моцареллы, томатный соус',
    },
    {
        name: 'Cheese',
        img: 'https://media.dodostatic.net/image/r:292x292/11EE7D600BC7B9F1B6888AF021E5C198.avif',
        price: 695,
        desc: 'Моцарелла, смесь сыров чеддер и пармезан, соус альфредо',
    }
]

const PizzaContent = () => {
  return (
    <div style={{
        display: "flex",
        gap:' 100px'
    }}>
      {dataPizza.map(p => {
       return (
        <div style={{width: 250}} key={p.name}>
        <img src={p.img} alt="" />
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <div style={{
            display:'flex',
            justifyContent:'space-between'
        }}>
        <p> от {p.price} сом</p>
        <button>Выбрать</button>
    </div>
    </div>
  
       )
      })}
    </div>
  )
}

export default PizzaContent
