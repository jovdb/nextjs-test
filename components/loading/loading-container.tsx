import { useRecoilValue } from 'recoil';
import { isLoadingState } from '../../hooks/useLoading';
import Loading from './loading';

export default function LoadingContainer() {
    const isLoading = useRecoilValue(isLoadingState) > 0;
    return (
        <Loading isLoading={isLoading } />
    );
} 