import { describe, it, expect, afterEach } from 'vitest';
import nock from 'nock';
import { fetchDailyBalanceYield, KiwoomDailyBalanceYieldRequest } from './daily-balance';

describe('fetchDailyBalanceYield', () => {
    const dummyToken = 'test-token';
    const dummyRequest: KiwoomDailyBalanceYieldRequest = {
        qry_dt: '20230101',
    };

    const successResponse = {
        dt: '20230101',
        tot_buy_amt: '100000',
        tot_evlt_amt: '110000',
        tot_evltv_prft: '10000',
        tot_prft_rt: '10.00',
        dbst_bal: '500000',
        day_stk_asst: '610000',
        buy_wght: '20.00',
        day_bal_rt: [
            {
                stk_cd: '005930',
                stk_nm: '삼성전자',
                cur_prc: '70000',
                rmnd_qty: '10',
                buy_uv: '60000',
                buy_wght: '50.00',
                evltv_prft: '100000',
                prft_rt: '16.67',
                evlt_amt: '700000',
                evlt_wght: '70.00',
            }
        ]
    };

    const headers = {
        'cont-yn': 'N',
        'next-key': '',
    };

    afterEach(() => {
        nock.cleanAll();
    });

    it('should fetch daily balance yield successfully (Real)', async () => {
        nock('https://api.kiwoom.com')
            .post('/api/dostk/acnt', dummyRequest as any)
            .matchHeader('authorization', `Bearer ${dummyToken}`)
            .matchHeader('api-id', 'ka01690')
            .reply(200, successResponse, headers);

        const result = await fetchDailyBalanceYield(dummyToken, dummyRequest);

        expect(result).toEqual({
            ...successResponse,
            cont_yn: 'N',
            next_key: '',
        });
    });

    it('should fetch daily balance yield successfully (Mock)', async () => {
        nock('https://mockapi.kiwoom.com')
            .post('/api/dostk/acnt', dummyRequest as any)
            .matchHeader('authorization', `Bearer ${dummyToken}`)
            .matchHeader('api-id', 'ka01690')
            .reply(200, successResponse, headers);

        const result = await fetchDailyBalanceYield(dummyToken, dummyRequest, true);

        expect(result).toEqual({
            ...successResponse,
            cont_yn: 'N',
            next_key: '',
        });
    });
});
