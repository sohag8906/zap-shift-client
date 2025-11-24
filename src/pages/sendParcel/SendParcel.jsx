import React from 'react';
import { set, useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const {register, handleSubmit, control,  formState: {errors}} = useForm();
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];
    // explore useMemo useCallback
    const senderRegion = useWatch({control, name: "senderRegion"});
    const receiverRegion = useWatch({control, name: 'receiverRegion'})

    const districtsByRegion = region =>{
      const regionDistrict = serviceCenters.filter (c => c.region === region);
      const districts = regionDistrict.map(d => d.district);
      return districts;
    }

   


   const handleSendParcel = data => {
       console.log(data);
       const sameDistrict = data.senderDistrict === data.receiverDistrict;
       console.log(sameDistrict);
   }

    return (
        <div>
            <h2 className='text-5xl font-bold mt-4'>Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 text-black' >
                {/* parcel type */}
                <div>
                    <label className="label mr-4">
                        <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                        Document</label>
                    <label className="label">
                        <input type="radio" {...register('parcelType')} value="non-document" className="radio"  />
                        Non-Document</label>
                </div>
                {/* parcel info: name, wight */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
            <fieldset className="fieldset">
          <label className="label">Parcel Name</label>
          <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
        </fieldset>
         <fieldset className="fieldset">
          <label className="label">Parcel Weight(kg)</label>
          <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />
        </fieldset>

                </div>
                {/* two column */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* sender Details */}
              
              <fieldset 
              className="fieldset">
                <h3 className='text-2xl font-semibold'>Sender Details</h3 >
                {/* sender name */}
          <label className="label">Sender Name</label>
          <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />
                {/* sender email */}
          <label className="label">Sender Email</label>
          <input type="text" {...register('senderEmail')} className="input w-full" placeholder="Sender Email" />
        {/* sender region */}
          <fieldset className="fieldset">
         <legend className="fieldset-legend">Sender Regions</legend>
       <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
        <option disabled={true}>Pick a region</option>
        {
          regions.map((r, i) =>  <option key={i} value={r}>{r}</option> )
        }
      </select>
      </fieldset>
       

       {/* sender districts */}
          <fieldset className="fieldset">
         <legend className="fieldset-legend">Sender Districts</legend>
       <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
        <option disabled={true}>Pick a district</option>
        {
          districtsByRegion(senderRegion).map((r, i) =>  <option key={i} value={r}>{r}</option> )
        }
      </select>
      </fieldset>
          

           {/* sender address */}
          <label className="label mt-4 ">Sender Address</label>
          <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
          
        </fieldset>
                
       {/* receiver Details  */}
          <fieldset className="fieldset">
             <h3 className='text-2xl font-semibold'>Receiver Details</h3>
                {/* Receiver name */}
          <label className="label">Receiver Name</label>
          <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />
           {/* Receiver email */}
          <label className="label">Receiver Email</label>
          <input type="text" {...register('receiverEmail')} className="input w-full" placeholder="Receiver Email" />

          {/* Receiver region */}
          <fieldset className="fieldset">
         <legend className="fieldset-legend">Receiver Regions</legend>
       <select {...register('receiverRegion')} defaultValue="Pick a region" className="select">
        <option disabled={true}>Pick a region</option>
        {
          regions.map((r, i) =>  <option key={i} value={r}>{r}</option> )
        }
      </select>
      </fieldset>

       {/* Receiver district */}
          <fieldset className="fieldset">
         <legend className="fieldset-legend">Receiver District</legend>
       <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select">
        <option disabled={true}>Pick a District</option>
        {
         districtsByRegion(receiverRegion).map((d, i) =>  <option key={i} value={d}>{d}</option> )
        }
      </select>
      </fieldset>

           {/* Receiver address */}
          <label className="label mt-4 ">Receiver Address</label>
          <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />
          
        </fieldset>
                </div>
                <input type="submit" className='btn btn-primary text-black mt-8' value="Send Parcel" />
            </form>
        </div>
    );
};

export default SendParcel;