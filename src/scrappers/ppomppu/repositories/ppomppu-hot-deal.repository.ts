import { AbstractPpomppuHotDealRepository } from './abstract.ppomppu-hot-deal.repository';
import { PpomppuHotDeal } from '../../../../types';

export class PpomppuHotDealRepository
    implements AbstractPpomppuHotDealRepository
{
    private storage: PpomppuHotDeal[] = [];
    public getDeal(): PpomppuHotDeal[] {
        return this.storage;
    }

    public setDeal(deal: PpomppuHotDeal[]): void {
        this.storage = deal;
    }
}
