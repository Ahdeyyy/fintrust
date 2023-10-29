import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let user: any;
    if (locals.pb.authStore.isValid) {
        user = locals.pb.authStore.model;
    }
    return {
        user
    };
}) satisfies LayoutServerLoad;