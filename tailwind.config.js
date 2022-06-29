/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        body:['Inter']
      },
      fontSize:{
        fs:['40px', '48px']
      },
      letterSpacing:{
        lp:['-.01em'],
        lp2:['-.011em'],
      },
      maxWidth:{
        w01:['772px'],
      },
      padding:{
        ps:['-4px','-13px']
      },
      backgroundImage:{
        image:"url('/img/bck.png')",
      }
    }
  },
  plugins: [],
}
