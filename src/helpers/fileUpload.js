

export const fileUpload = async( file ) => {

    if( !file ) throw new Error('There is not file to upload')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dcgrir0ui/upload';

    const formData = new FormData();

    formData.append('upload_preset','react-journal');
    formData.append('file', file);

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'Post',
            body: formData
        })

        if( !resp.ok ) throw new Error('Unable to upload the image');

        const cloudResp = await resp.json();

        return cloudResp.secure_url

    } catch (error) {
        console.log( error );
        throw new Error( errror.message );
    }

}