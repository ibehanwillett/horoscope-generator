import React from 'react'

let horoscopes = [
    {"sign" : "aries",
     "fortune":"be mysterious this week! just because your coffee made you extremely ill doesn't mean everyone has to know about it."},
    {"sign" :"tarus",
     "fortune" : "stop looking into things! you can either enjoy delious coke zero or know what it's doing in your body. you can't do both."},
    {"sign" : "gemini",
    "fortune":  "with the recent addition of cargo pant to your wardrobe you can no longer claim to be dressing the way you do ironically."},
    {"sign" : "cancer",
    "fortune" : "on the bright side, if you go through with making a podcast about your dating app stories that's another thing you can cross off your 'human experiances to reduce to grist for the content mill' list!"},
    {"sign" :"leo",
    "fortune" : "is srodinger's cat alive or dead? one things for sure, it's pissed in that box."},
    {"sign" : "virgo", 
    "fortune": "forgiveness is hard. emotionally speaking, decades long revenge quest ending with both of you going down on a burning yaught in the maldives is easier. #minmaxxing"},
    {"sign" :"libra",
    "fortune" :"when's the last time you romped? what about cavorted? what are you, some kind of screencuck?"},
    {"sign" :"scorpio",
    "fortune" :"don't let anyone take away your postitivity! if you leave milk out long enough that's cheese baby and all these doctors need to get off your back."},
    {"sign" :"saggittarius",
    "fortune" :"if god didn't want you to eat a whole jar of peanut butter in one sitting he wouldn't of given us such good scoopin' fingers."},
    {"sign" :"capricorn",
    "fortune" :"sure there's mindless horrors beyond your comprehension but there's a lot of basic economic policy beyond your comprehension. it's not that big a deal."},
    {"sign" :"aquarious",
    "fortune" :"you know those mantis shrimp that can see colours humans can't? they also have far more tortuous situationships than us & you're gonna be recarinated as one when you die."},
    {"sign" :"pisces",
    "fortune" :"will a exotic pet social media account be a reliable income stream? also can you call a eel in your watertank an exotic pet? be reasonable now."}
]


const randomScope = () => {
    let num = Math.floor(Math.random() * 12)
  return (
    horoscopes[num].fortune
  )
}

export default randomScope