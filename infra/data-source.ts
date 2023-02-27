import { PpomppuHotDealRepository } from '../src/scrappers/ppomppu/repositories/ppomppu-hot-deal.repository';

export class DataSource {
    private static ppomppuHotDealRepository: PpomppuHotDealRepository;
    public static getPpomppuHotDealRepository() {
        if (!this.ppomppuHotDealRepository) {
            this.ppomppuHotDealRepository = new PpomppuHotDealRepository();
        }
        return this.ppomppuHotDealRepository;
    }
}
