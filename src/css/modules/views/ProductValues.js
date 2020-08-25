import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

// import BackImage from '../../../../images/productCurvyLines';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="../../../../images/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Typography variant="h6" className={classes.title}>
                중고악기 가격비교
              </Typography>
              <Typography variant="h5">
                { '뮬, 통앤통, 중고나라 등 여러 사이트를 돌아다니며 검색하고 계신가요 ? ' }
                { '사운드마켓에서는 한 눈에 가격 비교를 할 수 있습니다. ' }
                당신의 지름을 응원하고 지원합니다.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Typography variant="h6" className={classes.title}>
                오픈마켓 가격비교
              </Typography>
              <Typography variant="h5">
                { '마음에 드시는 중고매물이 없으신가요? ' }
                { '오픈마켓 최저가도 함께 비교해드립니다. ' }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Typography variant="h6" className={classes.title}>
                제품 상세 리뷰
              </Typography>
              <Typography variant="h5">
                { '"이 제품이 가장 좋습니다" 라는 단순 추천 서비스가 아닙니다, ' }
                { '제품별로 어떤 특징이 있는지 상세하게 기록합니다. ' }
                { '니즈에 맞는 제품을 발견할 수 있습니다. 의미있는 소비를 돕습니다. ' }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
