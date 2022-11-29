import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View>
      <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View>
      <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View  style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appbar:{
    width:'100%',
    height:104,
    backgroundColor:'blue',
    justifyContent:'flex-end',
  },
  appbarInner:{
    alignItems:'center',
  },
  appbarRight:{
    color:'gray',
    position:'absolute',
    right:19,
    bottom:16,
  },
  appbarTitle:{
    marginBottom:8,
    fontSize:24,
    lineHeight:32,
    color:'white',
    fontWeight:'bold',
  },
  memoListItem:{
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:16,
    paddingHorizontal:19,
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'gray',
  },
  memoListItemTitle:{
    fontSize:16,
    lineHeight:32,
  },
  memoListItemDate:{
    fontSize:12,
    lineHeight:16,
    color:'#848484',
  },
  circleButton:{
    backgroundColor:'blue',
    width:64,
    height:64,
    borderRadius:32,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:40,
    bottom:40,
    shadowColor:'black',
    shadowOffset:{width:0,height:8},
    shadowOpacity:0.25,
    shadowRadius:8,
    // androidのスタイル
    elevation:8,
  },
  circleButtonLabel:{
    color:'white',
    fontSize:40,
    lineHeight:40,
  }
});
