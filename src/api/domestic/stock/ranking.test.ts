import { describe, it, expect, afterEach } from 'vitest';
import nock from 'nock';
import { fetchStockSearchRanking, KiwoomStockSearchRankingRequest } from './ranking';

describe('fetchStockSearchRanking', () => {
    const dummyToken = 'test-token';
    const dummyRequest: KiwoomStockSearchRankingRequest = {
        qry_tp: '1',
    };

    const successResponse = {
        item_inq_rank: [
            {
                stk_nm: '키움증권',
                bigd_rank: '1',
                rank_chg: '0',
                rank_chg_sign: 'N',
                past_curr_prc: '+70700',
                base_comp_sign: '2',
                base_comp_chgr: '+0.57',
                prev_base_sign: '3',
                prev_base_chgr: '0.00',
                dt: '20250827',
                tm: '085900',
                stk_cd: '005930'
            },
            {
                stk_nm: '키움증권',
                bigd_rank: '2',
                rank_chg: '-1',
                rank_chg_sign: '-',
                past_curr_prc: '+206000',
                base_comp_sign: '2',
                base_comp_chgr: '+0.49',
                prev_base_sign: '3',
                prev_base_chgr: '0.00',
                dt: '20250827',
                tm: '085900',
                stk_cd: '039490'
            },
        ],
        return_code: 0,
        return_msg: "정상적으로 처리되었습니다"
    };

    const headers = {
        'cont-yn': 'N',
        'next-key': '',
    };

    afterEach(() => {
        nock.cleanAll();
    });

    it('should fetch stock search ranking successfully (Real)', async () => {
        nock('https://api.kiwoom.com')
            .post('/api/dostk/stkinfo', dummyRequest as any)
            .matchHeader('authorization', `Bearer ${dummyToken}`)
            .matchHeader('api-id', 'ka00198')
            .reply(200, successResponse, headers);

        const result = await fetchStockSearchRanking(dummyToken, dummyRequest);

        expect(result).toEqual({
            ...successResponse,
            cont_yn: 'N',
            next_key: '',
        });
    });

    it('should fetch stock search ranking successfully (Mock)', async () => {
        nock('https://mockapi.kiwoom.com')
            .post('/api/dostk/stkinfo', dummyRequest as any)
            .matchHeader('authorization', `Bearer ${dummyToken}`)
            .matchHeader('api-id', 'ka00198')
            .reply(200, successResponse, headers);

        const result = await fetchStockSearchRanking(dummyToken, dummyRequest, true);

        expect(result).toEqual({
            ...successResponse,
            cont_yn: 'N',
            next_key: '',
        });
    });
});
