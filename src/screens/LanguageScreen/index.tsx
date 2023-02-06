import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {
  DispatchData,
  GetLangData,
  GetStoreData,
  navigateTo,
  resetStack,
} from '../../utils/commonFun';
import {SafeAreaView} from 'react-native-safe-area-context';
import {setLanguage} from '../../redux/actions';
import CommonButton from '../../components/commonButton';
import CommonCheckBox from '../../components/commonCheckBox';
import CommonImage from '../../components/commonImage';
import Loader from '../../components/commonLoader';
import colors from '../../utils/colors/index';
import config from '../../utils/config/index/index';
import styles from '../../utils/styles/index';
import '../../utils/translation/i18n';
import {useTranslation} from 'react-i18next';
import {LOGIN_SCREEN, MOVIE_SCREEN} from '../../route/index';

const LanguageScreen = (props: any) => {
  const {t, i18n} = useTranslation();
  const [state, setState] = useState({loading: true, checked: true});

  //Getting language data
  useEffect(() => {
    checkLangData();
  }, []);

  //check default lang data and change language according to the redux
  const checkLangData = async () => {
    const lang = GetLangData();
    i18n.changeLanguage(lang.data);
    if (lang && lang.data && lang.data === 'ar') {
      setState({loading: false, checked: false});
    } else setState({...state, loading: false});
  };

  //submit button press after selected the language
  const onPressSubmit = () => {
    const userloggedin = GetStoreData();
    let data = {data: state.checked ? 'en' : 'ar'};
    DispatchData(setLanguage(data));
    i18n.changeLanguage(state.checked ? 'en' : 'ar');
    if (userloggedin) {
      resetStack(props, MOVIE_SCREEN);
    } else {
      navigateTo(props, LOGIN_SCREEN);
    }
  };

  //LogoImage added in useCallback so that will prevent re rendering
  const LogoImage = useCallback(() => {
    return (
      <View style={styles.languageLogoContainer}>
        <CommonImage
          source={config.tmdbLogoImage}
          imgStyle={styles.LoginImgLogoStyle}
        />
      </View>
    );
  }, []);

  //select language title added in useCallback so that will prevent re rendering
  const SelectLang = useCallback(() => {
    return (
      <View style={styles.mv20}>
        <Text style={styles.selectLanguageTitle}>{t('selectLanguage')}</Text>
      </View>
    );
  }, []);

  //select method for setting data in state
  const uncheckBox = () => setState({...state, checked: !state.checked});

  //1 title, 2 checkbox for selection Language and one submit button.
  let Arbic = 'Arabic';
  let English = 'English';
  return (
    <ImageBackground source={config.backgroundImage} style={styles.fl1}>
      <SafeAreaView style={styles.flex1AlignCenter}>
        {state.loading && <Loader />}
        <LogoImage />

        <View style={styles.fl1}>
          <SelectLang />

          <CommonCheckBox
            title={English}
            checked={state.checked}
            textStyle={{color: state.checked ? colors.theme2 : colors.Silver}}
            onPress={uncheckBox}
          />

          <View style={styles.h50} />

          <CommonCheckBox
            title={Arbic}
            textStyle={{color: !state.checked ? colors.theme2 : colors.Silver}}
            checked={!state.checked}
            onPress={uncheckBox}
          />

          <View style={styles.h30} />

          <CommonButton title={t('submit')} onPress={onPressSubmit} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LanguageScreen;
