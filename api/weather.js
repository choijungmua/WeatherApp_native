import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = (params) =>
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20210628&base_time=0600&nx=55&ny=127`;
