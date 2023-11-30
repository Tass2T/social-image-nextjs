'use client';

import {
    createClientComponentClient,
    createRouteHandlerClient,
} from '@supabase/auth-helpers-nextjs';
import { useUser } from '@supabase/auth-helpers-react';
import { File } from 'buffer';
import { useState } from 'react';

const ImageUploader = () => {
    const [file, setFile] = useState<File>();
    const user = useUser();

    const supabase = createClientComponentClient();
    const handleChange = (e: any) => {
        if (e?.target?.files) {
            setFile(e.target.files[0]);
        }
    };
    const uploadImage = async () => {
        console.log(user);

        // try {
        //     const { data, error } = await supabase.storage
        //         .from('images')
        //         .upload(`public/${file.name}`, file, {});
        //     const path: string | undefined = data?.path;

        //     if (path) {
        //         const { data, error } = await supabase.from('images').insert({
        //             image_path: path,
        //             likes: 0,
        //             user_id: user?.id,
        //             visible: true,
        //         });
        //         console.log(data, error);

        //         return data;
        //     }
        // } catch (e) {
        //     console.error(e);
        // }
    };
    return (
        <div className="fixed right-8 top-20 w-64 h-14 rounded-md bg-light-black">
            <input
                onChange={handleChange}
                accept="image/png, image/jpeg, image/jpg, application/pdf"
                type="file"
                name=""
                id=""
            />

            <button onClick={uploadImage}>Valider</button>
        </div>
    );
};

export default ImageUploader;
