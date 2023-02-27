import { PpomppuHotDeal } from '../../../../types';

export abstract class AbstractPpomppuHotDealRepository {
    abstract getDeal(): PpomppuHotDeal[];

    abstract setDeal(deal: PpomppuHotDeal[]): void;
}
