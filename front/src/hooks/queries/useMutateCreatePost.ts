import {createPost} from '@/api';
import {UseMutationCustomOptions} from '@/types/common';
import {useMutation} from '@tanstack/react-query';

function useMutateCreatePost(mutationOption?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: createPost,
    ...mutationOption,
  });
}

export default useMutateCreatePost;
