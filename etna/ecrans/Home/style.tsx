import { StyleSheet } from "react-native" 
import { COLORS, PADDING } from "../../outils/contantes";

const Styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: PADDING.horizontal,
      paddingVertical: PADDING.vertical,
      marginTop: 35,
      backgroundColor: 'white'
    },

    userImg:{
       width: 50,
       height: 50, 
       borderRadius: 50 / 2,
    },

    userName:{
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.main
    },

    //style flatlist
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    
  scrollableListItem: {
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor: 'white',
      marginRight: 15,
      elevation: 5,
      borderRadius: 5,
      flexDirection: "column",
  },

  mainText:{
      fontWeight:'bold',
      fontSize: 16,
  },

  subText:{
      marginTop: 3,
      fontSize: 12,
      color: COLORS.main
  },

  title_etudiant:{
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title_etudiants:{
    fontWeight: "bold",
    fontSize:19,
  },

  title_afficher:{
    color: COLORS.main,
    fontWeight: "bold",
  },

  etudiantContainer:{
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  etudiant:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginBottom: 10,
    borderRadius: 8,
  },

  etudiantImg:{
    width: 40,
    height: 40,
    borderRadius: 80/2,
    marginRight: 15,
  },

  listeEtudiant:{
    flexDirection:'column',
  },

  etudiantName:{
    fontWeight:'bold',
    marginBottom: 10,
  },

  etudiantAffiche:{
    backgroundColor: COLORS.main,
    paddingHorizontal: PADDING.horizontal,
    //paddingVertical: PADDING.vertical,
    padding: 5,
    borderRadius: 15,
    fontSize: 13,
    color: "#fff",
    width: 80,
  }

  });

  export default Styles;