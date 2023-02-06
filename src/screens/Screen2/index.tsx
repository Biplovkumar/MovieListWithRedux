import React, {  useEffect, useState } from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { GetLangData, navigateTo, RemoveData, resetStack } from '../../utils/commonFun';
import { SCREEN1 } from '../../route';
import { getApiService } from '../../services/Services';
import config from '../../utils/config/index';
import styles from '../../utils/styles';
import MovieItem from '../../components/movieComp/MovieItem';
import SmallLoader from '../../components/smallLoader/index';
import { showMessage } from 'react-native-flash-message';
import colors from '../../utils/colors';

function Screen2(props: any) {
  const { t, i18n } = useTranslation();

  const [state, setState] = useState({
    loading: false, MovieList: null, totalPages: 0, currPage: 0, pageCount: 1
  })

  /**
 * @param {*} GetLangData getting lang data from redux.
 * @param {*} props.navigation.setOptions setting header logout and change laguage button.
 */
  useEffect(() => {
    const lang = GetLangData();
    i18n.changeLanguage(lang.data)

    // Use `setOptions` to delete the user data and navigate again to login page.
    props.navigation.setOptions({
      title: t("homeTitle"),
      headerLeft: () => (
        <Icon name='language' type='font-awesome' color={colors.headerBtn}
          onPress={() => { navigateTo(props, 'LanguageSelection'); }} />
      ),
      headerRight: () => (
        <Icon name='logout-variant' type='material-community' color={colors.headerBtn}
          onPress={() => { RemoveData(); resetStack(props, SCREEN1); }} />
      )});
   //calling get moving data api
    handleApiData();

  }, [props]);



  //calling get moving data api
  const handleApiData = () => {
    setState({ ...state, loading: true })
    const lang = i18n.language
    const temp = lang === 'ar' ? config.ARBIC : config.ENG
    let URL = config.LangApi + temp + config.pageKey + state.pageCount
    callPopularMovieApi(URL)
  }


    //calling get moving data api
  const callPopularMovieApi = (URL: any) => {
    getApiService(URL).then((res) => {
      if (res && res.results && res.results != '') {
        const { results, page, total_pages } = res
        console.log(total_pages);
        setState({ ...state, loading: false, MovieList: results, currPage: parseInt(page), totalPages: total_pages, pageCount: state.pageCount + 1 })
      }
    }).catch((error) => { setState({ ...state, loading: false }); showAlert(error) })
  }

  //Show errors after catching.
  const showAlert = (val: any) => { showMessage({ message: 'Error', description: val, type: 'warning' }) }


  //Grid item to show Movie this image and title
  //@ts-ignore
  const renderItem = ({ item }) => <MovieItem movie={item} />;



  //Function 'listFooter', show 'Loader' while fetching more data from server.
  const listFooter = () => <SmallLoader />;


  //Movie data flat list
  return (
    <ImageBackground source={config.backgroundImage} style={styles.fl1}>
      <View style={styles.mt50}>
        <FlatList
          style={styles.movieList}
          data={state.MovieList}
          renderItem={renderItem}
          numColumns={2}
          onMomentumScrollBegin={() => { const onEndReachedCalledDuringMomentum = false;}}
          keyExtractor={(item, index) => String(item?.id)}
          onEndReached={() => handleApiData()}
          onEndReachedThreshold={0.75}
          ListFooterComponent={listFooter}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
}



export default Screen2;
