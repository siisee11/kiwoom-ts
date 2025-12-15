## KIWOOM API Implementation Status

This table tracks the implementation status of the KIWOOM API endpoints.

| ID | Name | Category | URL | Status | Note |
|:---|:---|:---|:---|:---|:---|
| au10001 | 접근토큰 발급 | OAuth 인증 > 접근토큰발급 | /oauth2/token | ✅ [Implemented](src/api/oauth2/token.ts) |  |
| au10002 | 접근토큰폐기 | OAuth 인증 > 접근토큰폐기 | /oauth2/revoke | ❌ Unimplemented |  |
| ka00198 | 실시간종목조회순위 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ✅ [Implemented](src/api/domestic/stock/ranking.ts) |  |
| ka01690 | 일별잔고수익률 | 국내주식 > 계좌 | /api/dostk/acnt | ✅ [Implemented](src/api/domestic/account/daily-balance.ts) |  |
| ka10001 | 주식기본정보요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10002 | 주식거래원요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10003 | 체결정보요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10004 | 주식호가요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10005 | 주식일주월시분요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10006 | 주식시분요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10007 | 시세표성정보요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10008 | 주식외국인종목별매매동향 | 국내주식 > 기관/외국인 | /api/dostk/frgnistt | ❌ Unimplemented |  |
| ka10009 | 주식기관요청 | 국내주식 > 기관/외국인 | /api/dostk/frgnistt | ❌ Unimplemented |  |
| ka10010 | 업종프로그램요청 | 국내주식 > 업종 | /api/dostk/sect | ❌ Unimplemented |  |
| ka10011 | 신주인수권전체시세요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10013 | 신용매매동향요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10014 | 공매도추이요청 | 국내주식 > 공매도 | /api/dostk/shsa | ❌ Unimplemented |  |
| ka10015 | 일별거래상세요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10016 | 신고저가요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10017 | 상하한가요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10018 | 고저가근접요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10019 | 가격급등락요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10020 | 호가잔량상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10021 | 호가잔량급증요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10022 | 잔량율급증요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10023 | 거래량급증요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10024 | 거래량갱신요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10025 | 매물대집중요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10026 | 고저PER요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10027 | 전일대비등락률상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10028 | 시가대비등락률요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10029 | 예상체결등락률상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10030 | 당일거래량상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10031 | 전일거래량상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10032 | 거래대금상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10033 | 신용비율상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10034 | 외인기간별매매상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10035 | 외인연속순매매상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10036 | 외인한도소진율증가상위 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10037 | 외국계창구매매상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10038 | 종목별증권사순위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10039 | 증권사별매매상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10040 | 당일주요거래원요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10042 | 순매수거래원순위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10043 | 거래원매물대분석요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10044 | 일별기관매매종목요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10045 | 종목별기관매매추이요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10046 | 체결강도추이시간별요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10047 | 체결강도추이일별요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10048 | ELW일별민감도지표요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka10050 | ELW민감도지표요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka10051 | 업종별투자자순매수요청 | 국내주식 > 업종 | /api/dostk/sect | ❌ Unimplemented |  |
| ka10052 | 거래원순간거래량요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10053 | 당일상위이탈원요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10054 | 변동성완화장치발동종목요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10055 | 당일전일체결량요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10058 | 투자자별일별매매종목요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10059 | 종목별투자자기관별요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10060 | 종목별투자자기관별차트요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka10061 | 종목별투자자기관별합계요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10062 | 동일순매매순위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10063 | 장중투자자별매매요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10064 | 장중투자자별매매차트요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka10065 | 장중투자자별매매상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10066 | 장마감후투자자별매매요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10068 | 대차거래추이요청 | 국내주식 > 대차거래 | /api/dostk/slb | ❌ Unimplemented |  |
| ka10069 | 대차거래상위10종목요청 | 국내주식 > 대차거래 | /api/dostk/slb | ❌ Unimplemented |  |
| ka10072 | 일자별종목별실현손익요청_일자 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10073 | 일자별종목별실현손익요청_기간 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10074 | 일자별실현손익요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10075 | 미체결요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10076 | 체결요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10077 | 당일실현손익상세요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10078 | 증권사별종목매매동향요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10079 | 주식틱차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka10080 | 주식분봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka10081 | 주식일봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka10082 | 주식주봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka10083 | 주식월봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka10084 | 당일전일체결요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10085 | 계좌수익률요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10086 | 일별주가요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10087 | 시간외단일가요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka10088 | 미체결 분할주문 상세 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10094 | 주식년봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka10095 | 관심종목정보요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10098 | 시간외단일가등락율순위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka10099 | 종목정보 리스트 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10100 | 종목정보 조회 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10101 | 업종코드 리스트 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10102 | 회원사 리스트 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka10131 | 기관외국인연속매매현황요청 | 국내주식 > 기관/외국인 | /api/dostk/frgnistt | ❌ Unimplemented |  |
| ka10170 | 당일매매일지요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| ka10171 | 조건검색 목록조회 | 국내주식 > 조건검색 | /api/dostk/websocket | ❌ Unimplemented |  |
| ka10172 | 조건검색 요청 일반 | 국내주식 > 조건검색 | /api/dostk/websocket | ❌ Unimplemented |  |
| ka10173 | 조건검색 요청 실시간 | 국내주식 > 조건검색 | /api/dostk/websocket | ❌ Unimplemented |  |
| ka10174 | 조건검색 실시간 해제 | 국내주식 > 조건검색 | /api/dostk/websocket | ❌ Unimplemented |  |
| ka20001 | 업종현재가요청 | 국내주식 > 업종 | /api/dostk/sect | ❌ Unimplemented |  |
| ka20002 | 업종별주가요청 | 국내주식 > 업종 | /api/dostk/sect | ❌ Unimplemented |  |
| ka20003 | 전업종지수요청 | 국내주식 > 업종 | /api/dostk/sect | ❌ Unimplemented |  |
| ka20004 | 업종틱차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka20005 | 업종분봉조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka20006 | 업종일봉조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka20007 | 업종주봉조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka20008 | 업종월봉조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka20009 | 업종현재가일별요청 | 국내주식 > 업종 | /api/dostk/sect | ❌ Unimplemented |  |
| ka20019 | 업종년봉조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka20068 | 대차거래추이요청(종목별) | 국내주식 > 대차거래 | /api/dostk/slb | ❌ Unimplemented |  |
| ka30001 | ELW가격급등락요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka30002 | 거래원별ELW순매매상위요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka30003 | ELWLP보유일별추이요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka30004 | ELW괴리율요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka30005 | ELW조건검색요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka30009 | ELW등락율순위요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka30010 | ELW잔량순위요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka30011 | ELW근접율요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka30012 | ELW종목상세정보요청 | 국내주식 > ELW | /api/dostk/elw | ❌ Unimplemented |  |
| ka40001 | ETF수익율요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka40002 | ETF종목정보요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka40003 | ETF일별추이요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka40004 | ETF전체시세요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka40006 | ETF시간대별추이요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka40007 | ETF시간대별체결요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka40008 | ETF일자별체결요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka40009 | ETF시간대별체결요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka40010 | ETF시간대별추이요청 | 국내주식 > ETF | /api/dostk/etf | ❌ Unimplemented |  |
| ka50010 | 금현물체결추이 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka50012 | 금현물일별추이 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka50079 | 금현물틱차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka50080 | 금현물분봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka50081 | 금현물일봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka50082 | 금현물주봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka50083 | 금현물월봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka50087 | 금현물예상체결 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka50091 | 금현물당일틱차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka50092 | 금현물당일분봉차트조회요청 | 국내주식 > 차트 | /api/dostk/chart | ❌ Unimplemented |  |
| ka50100 | 금현물 시세정보 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka50101 | 금현물 호가 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka52301 | 금현물투자자현황 | 국내주식 > 기관/외국인 | /api/dostk/frgnistt | ❌ Unimplemented |  |
| ka90001 | 테마그룹별요청 | 국내주식 > 테마 | /api/dostk/thme | ❌ Unimplemented |  |
| ka90002 | 테마구성종목요청 | 국내주식 > 테마 | /api/dostk/thme | ❌ Unimplemented |  |
| ka90003 | 프로그램순매수상위50요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka90004 | 종목별프로그램매매현황요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| ka90005 | 프로그램매매추이요청 시간대별 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka90006 | 프로그램매매차익잔고추이요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka90007 | 프로그램매매누적추이요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka90008 | 종목시간별프로그램매매추이요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka90009 | 외국인기관매매상위요청 | 국내주식 > 순위정보 | /api/dostk/rkinfo | ❌ Unimplemented |  |
| ka90010 | 프로그램매매추이요청 일자별 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| ka90012 | 대차거래내역요청 | 국내주식 > 대차거래 | /api/dostk/slb | ❌ Unimplemented |  |
| ka90013 | 종목일별프로그램매매추이요청 | 국내주식 > 시세 | /api/dostk/mrkcond | ❌ Unimplemented |  |
| kt00001 | 예수금상세현황요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00002 | 일별추정예탁자산현황요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00003 | 추정자산조회요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00004 | 계좌평가현황요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00005 | 체결잔고요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00007 | 계좌별주문체결내역상세요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00008 | 계좌별익일결제예정내역요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00009 | 계좌별주문체결현황요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00010 | 주문인출가능금액요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00011 | 증거금율별주문가능수량조회요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00012 | 신용보증금율별주문가능수량조회요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00013 | 증거금세부내역조회요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00015 | 위탁종합거래내역요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00016 | 일별계좌수익률상세현황요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00017 | 계좌별당일현황요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt00018 | 계좌평가잔고내역요청 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt10000 | 주식 매수주문 | 국내주식 > 주문 | /api/dostk/ordr | ❌ Unimplemented |  |
| kt10001 | 주식 매도주문 | 국내주식 > 주문 | /api/dostk/ordr | ❌ Unimplemented |  |
| kt10002 | 주식 정정주문 | 국내주식 > 주문 | /api/dostk/ordr | ❌ Unimplemented |  |
| kt10003 | 주식 취소주문 | 국내주식 > 주문 | /api/dostk/ordr | ❌ Unimplemented |  |
| kt10006 | 신용 매수주문 | 국내주식 > 신용주문 | /api/dostk/crdordr | ❌ Unimplemented |  |
| kt10007 | 신용 매도주문 | 국내주식 > 신용주문 | /api/dostk/crdordr | ❌ Unimplemented |  |
| kt10008 | 신용 정정주문 | 국내주식 > 신용주문 | /api/dostk/crdordr | ❌ Unimplemented |  |
| kt10009 | 신용 취소주문 | 국내주식 > 신용주문 | /api/dostk/crdordr | ❌ Unimplemented |  |
| kt20016 | 신용융자 가능종목요청 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| kt20017 | 신용융자 가능문의 | 국내주식 > 종목정보 | /api/dostk/stkinfo | ❌ Unimplemented |  |
| kt50000 | 금현물 매수주문 | 국내주식 > 주문 | /api/dostk/ordr | ❌ Unimplemented |  |
| kt50001 | 금현물 매도주문 | 국내주식 > 주문 | /api/dostk/ordr | ❌ Unimplemented |  |
| kt50002 | 금현물 정정주문 | 국내주식 > 주문 | /api/dostk/ordr | ❌ Unimplemented |  |
| kt50003 | 금현물 취소주문 | 국내주식 > 주문 | /api/dostk/ordr | ❌ Unimplemented |  |
| kt50020 | 금현물 잔고확인 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt50021 | 금현물 예수금 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt50030 | 금현물 주문체결전체조회 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt50031 | 금현물 주문체결조회 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt50032 | 금현물 거래내역조회 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| kt50075 | 금현물 미체결조회 | 국내주식 > 계좌 | /api/dostk/acnt | ❌ Unimplemented |  |
| 00 | 주문체결 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 04 | 잔고 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0A | 주식기세 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0B | 주식체결 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0C | 주식우선호가 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0D | 주식호가잔량 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0E | 주식시간외호가 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0F | 주식당일거래원 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0G | ETF NAV | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0H | 주식예상체결 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0I | 국제금환산가격 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0J | 업종지수 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0U | 업종등락 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0g | 주식종목정보 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0m | ELW 이론가 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0s | 장시작시간 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0u | ELW 지표 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 0w | 종목프로그램매매 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |
| 1h | VI발동/해제 | 국내주식 > 실시간시세 | /api/dostk/websocket | ❌ Unimplemented |  |