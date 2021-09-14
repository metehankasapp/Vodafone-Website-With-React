import React, { useState, Component } from "react";
import Wrapper from "../../Components/Wrapper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import BottomTabs from "../Homepage/BottomTabs";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SimplePopover from "../SimplePopover";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { SocialIcon } from "react-social-icons";

const useStyles = makeStyles((theme) => ({
  tabsCtr:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column"
  },
  socialIcon: {
    width: "25px !important",
    height: "25px !important",
    marginLeft: "3px",
  },
  filterTitle: {
    fontSize: "16px",
    fontFamily: "VodafoneFont, Sans-serif",
    color: "#999",
    width: "80px",
  },
  changerContainer: {
    padding: "20px",
    paddingLeft: "0",
  },
  changerContainerWborder: {
    padding: "20px",
    paddingLeft: "0",
    borderBottom: "2px solid rgba(0,0,0,.2)",
  },
  TagsUl: {
    display: "flex",
    flexDirection: "row",
    "&>li>button": {
      fontSize: "13px",
      backgroundColor: "#ddd",
      marginLeft: "15px",
      color: "black",
      borderRadius: "20px",
      fontWeight: 300,
    },
    "&>li>button:hover": {
      backgroundColor: "#ddd",
    },
  },
  packagesCard: {
    width: "340px",
  },
  packagesContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "3rem 0",
  },
  packagesCardInner: {
    borderRadius: "0px",
    position: "relative",
    overflow: "visible",
  },
  packagesCardDetailsCt: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#333",
    zIndex: "5",
    padding: "0 10px",
    transition: "all .5s ease",
  },
  packagesAbsoluteTop: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    display: "flex",
    flexDirection: "row",
    zIndex: "6",
  },
  packagesAbsSinirsiz: {
    backgroundColor: "rgb(235, 151, 0)",
    marginLeft: "10px",
    color: "white",
    fontFamily: "VodafoneFont, sans-serif",
    fontSize: "12px",
    padding: "0 2px",
    zIndex: "6",
  },
  packagesAbsOnlineOzel: {
    backgroundColor: "red",
    color: "white",
    padding: "0 2px",
    fontFamily: "VodafoneFont, sans-serif",
    fontSize: "12px",
  },
  PackageFirstAreaContainer: {
    background: "rgb(56,39,39)",
    background:
      "linear-gradient(90deg, rgba(56,39,39,1) 0%, rgba(170,23,0,1) 100%)",
  },
  packageName: {
    color: "white",
    fontSize: "16px",
    fontWeight: "300",
    fontFamily: "VodafoneFont, sans-serif",
    backgroundColor: "rgba(0,0,0,.2)",
    padding: "10px",
  },
  packageNamef: {
    color: "white",
    fontSize: "16px",
    fontWeight: "300",
    fontFamily: "VodafoneFont, sans-serif",
    padding: "10px",
    borderBottom: "1px solid rgba(255,255,255,.3)",
  },
  fsArea: {
    padding: "15px",
    paddingBottom: "30px",
    color: "#fff",
    position: "relative",
  },
  fsAbs: {
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgb(89, 13, 211)",
    width: "65%",
    borderRadius: "25px",
    fontFamily: "VodafoneFont, sans-serif",
    fontSize: "13px",
  },
  basicSubtitle: {
    fontSize: "13px",
    fontWeight: "100",
  },
  packagePrice: {
    fontSize: "43px",
    lineHeight: "12px",
    margin: "2rem 0",
    marginRight: "5px",
    fontFamily: "VodafoneFont, sans-serif",
  },
  ftContainer: {
    padding: "20px",
  },
  packageDetail: {
    fontSize: "30px",
    fontWeight: "500",
    fontFamily: "VodafoneFont, sans-serif",
  },
  greyColor: {
    color: "#888",
    marginLeft: "5px",
    fontSize: "30px",
    fontWeight: "500",
    fontFamily: "VodafoneFont, sans-serif",
  },
  packageDescription: {
    fontSize: "16px",
    fontFamily: "VodafoneFont, sans-serif",
    borderBottom: "1px solid rgba(0,0,0,.1)",
    padding: "5px",
    fontWeight: "700",
    color: "black",
  },
  packageDetailSecond: {
    fontSize: "15px",
    fontFamily: "VodafoneFont, sans-serif",
    borderBottom: "1px solid rgba(0,0,0,.1)",
    padding: "5px",
    fontWeight: "100",
  },
  detayButton: {
    borderRadius: "20px",
    border: "1px solid red",
    color: "rgba(0,0,0,.8)",
    margin: "15px",
    fontFamily: "VodafoneFont, sans-serif",
    fontSize: "13px",
    padding: "2px 25px",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  detayButtonf: {
    borderRadius: "20px",
    border: "1px solid #fff",
    color: "#fff",
    margin: "15px",
    fontFamily: "VodafoneFont, sans-serif",
    fontSize: "13px",
    padding: "2px 25px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  detailSentenceContainer: {
    padding: "15px 0",
    borderBottom: "1px solid rgba(255,255,255,.3)",
  },
  detailSentence: {
    fontSize: "12px",
    fontFamily: "VodafoneFont, sans-serif",
    color: "#fff",
    fontWeight: "500",
    marginBottom: "5px",
  },
  detailsUl: {
    height: "250px",
    overflow: "scroll",
    listStyleType: "disc",
    padding: "15px 0",
    margin: "0",
    "&>li": {
      color: "#fff",
      marginLeft: "15px",
      fontSize: "12px",
      fontFamily: "VodafoneFont, sans-serif",
      marginBottom: "10px",
    },
  },
  QuestionAns:{
    fontFamily:"VodafoneFont,sans-serif",
    color:"#333",
    fontWeight:"100"
  }
}));

const Tags = [
  "26 Yaş Altına Özel",
  "Öne Çıkan",
  "Ekonomik",
  "Sana Özel",
  "Çok Satan",
  "Sınırsız",
];

const FilterContainer = () => {
  const classes = useStyles();
  const [showDetail, setShowDetail] = useState({});

  const toggleHide = (index) => {
    setShowDetail({ ...showDetail, [index]: !showDetail[index] });
  };

  return (
    <Wrapper>
      <Grid container className={classes.changerContainerWborder}>
        <Grid item xs={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "baseline",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" className={classes.filterTitle}>
              Filtre
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <SimplePopover />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            asdasd
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.changerContainer}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "baseline",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" className={classes.filterTitle}>
              Etiketler
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <ul className={classes.TagsUl}>
                {Tags.map((index, val) => (
                  <li key={val}>
                    <Button>{index}</Button>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container className={classes.packagesContainer}>
        {PackagesList.filter(
          (packageName) => packageName.priceThreeMonth > 54
        ).map((filteredPackage, index) => (
          <Grid key={filteredPackage.key} className={classes.packagesCard}>
            <Card className={classes.packagesCardInner}>
              <Box
                className={classes.packagesCardDetailsCt}
                sx={{
                  opacity: !!showDetail[index] && "1",
                  visibility: !!showDetail[index] && "visible",
                  opacity: !showDetail[index] && "0",
                }}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.packageNamef}
                  >
                    {filteredPackage.packageName}
                  </Typography>
                </Box>
                <Box className={classes.detailSentenceContainer}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.detailSentence}
                  >
                    Sınırsız GB'larını aşağıdaki uygulamalar için özgürce
                    kullanabilirsin:
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {filteredPackage.packageFree.map((val) => (
                      <SocialIcon
                        url={`https://${val}.com/metehankasap`}
                        className={classes.socialIcon}
                      />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <ul className={classes.detailsUl}>
                    {filteredPackage.showDetails.map((key, val) => (
                      <li key={val}>{key}</li>
                    ))}
                  </ul>
                </Box>
                <Box fullWidth sx={{ textAlign: "center" }}>
                  <Button
                    className={classes.detayButtonf}
                    onClick={(e) => toggleHide(index)}
                  >
                    Detayları Gizle
                  </Button>
                </Box>
              </Box>
              <Box className={classes.packagesAbsoluteTop}>
                {filteredPackage.OnlineOzel ? (
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.packagesAbsOnlineOzel}
                  >
                    Online'a Özel İndirimli
                  </Typography>
                ) : null}
                {filteredPackage.Sinirsiz ? (
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.packagesAbsSinirsiz}
                  >
                    Sinirsiz
                  </Typography>
                ) : null}
              </Box>
              <Box className={classes.PackageFirstAreaContainer}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.packageName}
                  >
                    {filteredPackage.packageName}
                  </Typography>
                </Box>
                <Box className={classes.fsArea}>
                  {filteredPackage.specialOffer ? (
                    <Typography
                      variant="subtitle1"
                      align="center"
                      className={classes.fsAbs}
                    >
                      {filteredPackage.specialOffer}
                    </Typography>
                  ) : null}
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.basicSubtitle}
                  >
                    Online'a özel ilk 3 ay
                  </Typography>
                  <Box
                    fullWidth
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      align="center"
                      className={classes.packagePrice}
                    >
                      ₺{filteredPackage.priceThreeMonth}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      className={classes.basicSubtitle}
                    >
                      /ay
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.basicSubtitle}
                  >
                    Sonraki 9 ay ₺{filteredPackage.priceNineMonth} /ay
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.ftContainer}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.packageDetail}
                  >
                    {filteredPackage.packageDetail}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.greyColor}>
                    {" "}
                    + SINIRSIZ
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      justifyContent: "center",
                      padding: "10px 20px",
                      border: "1px solid #ddd",
                      borderRadius: "25px",
                    }}
                  >
                    {filteredPackage.packageFree.map((val) => (
                      <SocialIcon
                        url={`https://${val}.com/metehankasap`}
                        className={classes.socialIcon}
                      />
                    ))}
                  </Box>
                </Box>

                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.packageDescription}
                >
                  {filteredPackage.packageDescription}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.packageDetailSecond}
                >
                  {filteredPackage.packageDetailSecond}
                </Typography>

                <Box fullWidth sx={{ textAlign: "center" }}>
                  <Button
                    className={classes.detayButton}
                    onClick={(e) => toggleHide(index)}
                  >
                    Detayları Göster
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.tabsCtr}>
        <Typography variant="h2" align="center" className={classes.QuestionAns}>
          Sorularınızın cevapları burada.
        </Typography>
        <BottomTabs />
      </Grid>
    </Wrapper>
  );
};

export default FilterContainer;

const PackagesList = [
  {
    key: 1,
    packageName: "Red 20 GB",
    OnlineOzel: true,
    Sinirsiz: true,
    priceThreeMonth: 55,
    specialOffer: "Sınırsız TikTok paketi 25TL yerine 15TL!",
    priceNineMonth: 64,
    tags: [
      "26 Yaş Altına Özel",
      "Öne Çıkan",
      "Ekonomik",
      "Sana Özel",
      "Çok Satan",
      "Sınırsız",
    ],
    packageDetail: "20 GB",
    packageFree: ["whatsapp", "facebook", "twitter", "spotify", "instagram"],
    packageDescription: "ilk ay 20 GB hediye!",
    packageDetailSecond: "1000 DK + 250 SMS",
    showDetails: [
      "Vodafonelular ve sabit hatlarla sınırsız konuşabilirsiniz.",
      "Yeni gelen Redlilere özel Sınırsız Tiktok paketi aylık 25TL yerine 15TL! Bu paket ile Tiktok uygulaması yönüne internet kullanımınız GB kotanızdan düşmez.",
      "Vodafone TV Red Paketi aylık 2GB interneti ile 12 ay boyunca hediye!",
      "Ücretsiz araç dezenfeksiyonundan Trendyol'da kargo indirimine kadar bir çok ayrıcalık Vodafone Yanımda'da!",
      "Taahhütsüz Aylık Tarife Ücreti: 94TL",
      "İlk ay geçerli 20 GB hediyen Vodafone Yanımda'da seni bekliyor!",
    ],
  },
  {
    key: 2,
    packageName: "Red 20 GB",
    OnlineOzel: true,
    Sinirsiz: false,
    priceThreeMonth: 55,
    priceNineMonth: 64,
    tags: ["26 Yaş Altına Özel", "Öne Çıkan"],
    packageDetail: "20 GB",
    packageFree: ["whatsapp", "facebook", "spotify", "instagram"],
    packageDescription: "ilk ay 20 GB hediye!",
    packageDetailSecond: "1000 DK + 250 SMS",
    showDetails: [
      "Yeni gelen Redlilere özel Sınırsız Tiktok paketi aylık 25TL yerine 15TL! Bu paket ile Tiktok uygulaması yönüne internet kullanımınız GB kotanızdan düşmez.",
      "Vodafone TV Red Paketi aylık 2GB interneti ile 12 ay boyunca hediye!",
      "Ücretsiz araç dezenfeksiyonundan Trendyol'da kargo indirimine kadar bir çok ayrıcalık Vodafone Yanımda'da!",
      "Taahhütsüz Aylık Tarife Ücreti: 94TL",
      "İlk ay geçerli 20 GB hediyen Vodafone Yanımda'da seni bekliyor!",
    ],
  },
  {
    key: 3,
    packageName: "Red 20 GB",
    OnlineOzel: false,
    Sinirsiz: true,
    priceThreeMonth: 100,
    specialOffer: "Sınırsız TikTok paketi 25TL yerine 15TL!",
    priceNineMonth: 64,
    tags: ["Sana Özel", "Çok Satan", "Sınırsız"],
    packageDetail: "20 GB",
    packageFree: ["whatsapp", "instagram"],
    packageDescription: "ilk ay 20 GB hediye!",
    packageDetailSecond: "1000 DK + 250 SMS",
    showDetails: [
      "Vodafonelular ve sabit hatlarla sınırsız konuşabilirsiniz.",
      "Yeni gelen Redlilere özel Sınırsız Tiktok paketi aylık 25TL yerine 15TL! Bu paket ile Tiktok uygulaması yönüne internet kullanımınız GB kotanızdan düşmez.",
      "Vodafone TV Red Paketi aylık 2GB interneti ile 12 ay boyunca hediye!",
      "Ücretsiz araç dezenfeksiyonundan Trendyol'da kargo indirimine kadar bir çok ayrıcalık Vodafone Yanımda'da!",
      "Taahhütsüz Aylık Tarife Ücreti: 94TL",
      "İlk ay geçerli 20 GB hediyen Vodafone Yanımda'da seni bekliyor!",
    ],
  },
];
