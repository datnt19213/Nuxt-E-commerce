<template>
  <div class="w-full rounded-2xl bg-white overflow-hidden flex justify-center">
    <form
      action=""
      method="post"
      class="w-full grid xl:gap-28 lg:gap-16 md:gap-5 md:py-7 xl:px-20 lg:px-12 md:px-5 px-3 lg:grid-cols-10 grid-cols-1"
    >
      <div
        class="w-full xl:col-span-6 lg:col-span-5 px-5 no-scrollbar lg:h-screen lg:overflow-y-scroll pb-7"
      >
        <div class="w-full flex flex-col gap-5">
          <div class="w-full flex flex-col gap-1">
            <h2 class="font-semibold text-2xl tracking-tight">
              Contact Information
            </h2>
            <div class="w-full text-sm">
              <span class="text-dark opacity-50">Already have account?</span>
              <CommonLink
                to="/login"
                variant="ghost"
                mode="normal"
                class="text-semiblue hover:no-underline"
              >
                Login
              </CommonLink>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full flex flex-col gap-1">
              <span class="text-xs uppercase font-normal tracking-tight"
                >Email</span
              >
              <input
                type="email"
                name="emailCheckout"
                id="emailCheckout"
                class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
                required
                placeholder="abc.123@gmail.com"
              />
            </div>
            <div class="w-full hidden">
              <div class="w-full flex flex-col gap-1 py-3">
                <span class="text-xs uppercase font-normal tracking-tight"
                  >Username</span
                >
                <input
                  type="text"
                  name="usernameCheckout"
                  id="usernameCheckout"
                  class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
                  placeholder="abc123"
                />
              </div>
              <div class="w-full flex flex-col gap-1">
                <span class="text-xs uppercase font-normal tracking-tight"
                  >Password</span
                >
                <input
                  type="password"
                  name="passwordCheckout"
                  id="passwordCheckout"
                  class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="w-full flex justify-start items-center gap-3 py-5">
              <span
                class="text-xs uppercase font-normal text-nowrap tracking-tight"
                >Create an account?
              </span>
              <input
                type="checkbox"
                name="emailCheckout"
                id="emailCheckout"
                class="block rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>
        </div>
        <!-- bill detail -->
        <div class="pt-12">
          <h2 class="font-semibold text-2xl tracking-tight">Bill Details</h2>
          <div class="w-full grid grid-cols-2 gap-5 py-3">
            <div class="w-full flex flex-col gap-1 col-span-1">
              <span class="text-xs uppercase font-normal tracking-tight"
                >First Name</span
              >
              <input
                type="text"
                name="firstNameCheckout"
                id="firstNameCheckout"
                class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
                placeholder="John"
              />
            </div>
            <div class="w-full flex flex-col gap-1 col-span-1">
              <span class="text-xs uppercase font-normal tracking-tight">
                Last Name
              </span>
              <input
                type="text"
                name="lastNameCheckout"
                id="lastNameCheckout"
                class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
                placeholder="Smith"
              />
            </div>
          </div>
          <div class="w-full flex flex-col gap-1 py-3">
            <span class="text-xs uppercase font-normal tracking-tight"
              >Address 1</span
            >
            <input
              type="text"
              name="address1Checkout"
              id="address1Checkout"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
              placeholder="A Street"
            />
          </div>
          <div class="w-full flex flex-col gap-1 py-3">
            <span class="text-xs uppercase font-normal tracking-tight"
              >Address 2</span
            >
            <input
              type="text"
              name="address2Checkout"
              id="address2Checkout"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
              placeholder="B Alley"
            />
          </div>
          <div class="w-full grid grid-cols-2 gap-5 py-3">
            <div class="w-full flex flex-col gap-1 col-span-1">
              <span class="text-xs uppercase font-normal tracking-tight"
                >City</span
              >
              <input
                type="text"
                name="cityCheckout"
                id="cityCheckout"
                class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
                placeholder="C City"
              />
            </div>
            <div class="w-full flex flex-col gap-1 col-span-1">
              <span class="text-xs uppercase font-normal tracking-tight">
                County
              </span>
              <input
                type="text"
                name="countyCheckout"
                id="countyCheckout"
                class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
                placeholder="C City"
              />
            </div>
          </div>
          <div class="w-full h-full grid grid-cols-2 gap-5 py-3">
            <div class="w-full flex flex-col gap-1 col-span-1">
              <span class="text-xs uppercase font-normal tracking-tight">
                Country
              </span>
              <div class="relative h-full">
                <select
                  name="countryCheckout"
                  id="countryCheckout"
                  class="block w-full h-full rounded-md border-0 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none appearance-none bg-white cursor-pointer"
                >
                  <option
                    v-for="(lang, index) in languages"
                    :key="index"
                    :value="lang.value"
                    class="cursor-pointer"
                  >
                    {{ lang.name }}
                  </option>
                </select>
                <IconsArrowDownIcon
                  class="text-2xl pointer-events-none group-open:rotate-180 transition-all select-none absolute -translate-y-1/2 top-1/2 right-1 opacity-80"
                />
              </div>
            </div>
            <div class="w-full flex flex-col gap-1 col-span-1">
              <span class="text-xs uppercase font-normal tracking-tight">
                Zip (Optional)
              </span>
              <input
                type="text"
                name="zipcodeCheckout"
                id="zipcodeCheckout"
                class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
                placeholder="100000"
              />
            </div>
          </div>
          <div class="w-full flex flex-col gap-1 py-3">
            <span class="text-xs uppercase font-normal tracking-tight"
              >Phone</span
            >
            <input
              type="tel"
              name="phoneCheckout"
              id="phoneCheckout"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
              placeholder="+567904890837"
            />
          </div>
        </div>
        <!-- ship method -->
        <div class="w-full pt-12 grid grid-cols-2 gap-5">
          <label
            class="px-5 ring-gray ring-1 rounded-md col-span-1 flex justify-between items-center cursor-pointer"
          >
            <div
              for="bordered-radio-1"
              class="py-3 text-base tracking-tight flex flex-col pointer-events-none select-none"
            >
              <span class="font-normal text-dark opacity-80">Standard</span>
              <span class="text-sm font-bold">$123</span>
            </div>
            <input
              id="bordered-radio-1"
              type="radio"
              value="standard"
              name="bordered-radio"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white before:opacity-0 checked:border-semigreen checked:bg-semigreen checked:before:opacity-100"
            />
          </label>
          <label
            class="px-5 ring-gray ring-1 rounded-md col-span-1 flex justify-between items-center cursor-pointer"
          >
            <div
              for="bordered-radio-1"
              class="py-3 text-base tracking-tight flex flex-col pointer-events-none select-none"
            >
              <span class="font-normal text-dark opacity-80">Express</span>
              <span class="text-sm font-bold">$123</span>
            </div>
            <input
              id="bordered-radio-1"
              type="radio"
              value="express"
              name="bordered-radio"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white before:opacity-0 checked:border-semigreen checked:bg-semigreen checked:before:opacity-100"
            />
          </label>
        </div>
        <!-- payment options -->
        <div class="w-full pt-12 grid grid-cols-3 gap-5">
          <div class="col-span-1">
            <input
              type="radio"
              id="creditcardCheckout"
              name="paymentheckout"
              value="creditcard"
              class="hidden peer"
              required
            />
            <label
              for="creditcardCheckout"
              class="inline-flex items-center justify-between w-full px-5 py-1.5 text-dark bg-white ring-1 ring-gray rounded-lg cursor-pointer peer-checked:ring-semigreen peer-checked:ring-2 peer-checked:text-semigreen group hover:text-dark hover:bg-white gap-1"
            >
              <IconsCreditCardIcon class="text-3xl opacity-80" />
              <span class="tracking-tight opacity-80 md:text-sm text-xs">Credit Card</span>
            </label>
          </div>
          <div class="col-span-1">
            <input
              type="radio"
              id="paypalCheckout"
              name="paymentheckout"
              value="paypal"
              class="hidden peer"
              required
            />
            <label
              for="paypalCheckout"
              class="inline-flex items-center justify-between w-full px-5 py-1.5 text-dark bg-white ring-1 ring-gray rounded-lg cursor-pointer peer-checked:ring-semigreen peer-checked:ring-2 peer-checked:text-semigreen group hover:text-dark hover:bg-white gap-1"
            >
              <IconsPaypalIcon class="text-3xl opacity-80" />
              <span class="tracking-tight opacity-80 md:text-sm text-xs">Credit Card</span>
            </label>
          </div>
          <div class="col-span-1">
            <input
              type="radio"
              id="codCheckout"
              name="paymentheckout"
              value="cod"
              class="hidden peer"
              required
            />
            <label
              for="codCheckout"
              class="inline-flex items-center justify-between w-full px-5 py-1.5 text-dark bg-white ring-1 ring-gray rounded-lg cursor-pointer peer-checked:ring-semigreen peer-checked:ring-2 peer-checked:text-semigreen group hover:text-dark hover:bg-white gap-1"
            >
              <IconsCodIcon class="text-3xl opacity-80" />
              <span class="tracking-tight opacity-80 md:text-sm text-xs">Credit Card</span>
            </label>
          </div>
        </div>
        <div class="w-full flex flex-col gap-3 pt-12">
          <h2 class="font-semibold text-2xl tracking-tight">Note (Optional)</h2>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full min-h-24 h-48 text-sm text-dark resize-none bg-white rounded-lg ring-1 ring-gray focus:ring-semigreen focus:ring-2 transition-all outline-none"
            placeholder="Note..."
          ></textarea>
        </div>
      </div>
      <!-- checkout panel -->
      <div class="w-full xl:col-span-4 lg:col-span-5">
        <div
          class="w-full bg-white shadow-round rounded-xl px-7 py-5 flex flex-col gap-3"
        >
          <h2 class="font-semibold text-xl tracking-tight">Order Summary</h2>
          <div class="w-full aspect-video overflow-y-scroll px-1 no-scrollbar">
            <ul role="list" class="divide-y divide-gray bg-slate-300">
              <li
                v-for="product in products"
                :key="product.id"
                class="flex items-start py-6 gap-5 bg-white"
              >
                <div
                  class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray"
                >
                  <img
                    :src="imageSample[0]"
                    :alt="product.name"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div class="flex flex-1 flex-col gap-5">
                  <div>
                    <div
                      class="flex justify-between text-base font-medium text-dark"
                    >
                      <h3>
                        <CommonLink
                          variant="ghost"
                          :to="`/product/${replacing(product.name)}`"
                          class="hover:no-underline rounded-none hover:text-semigreen transition-all"
                        >
                          {{ product.name }}
                        </CommonLink>
                      </h3>
                      <div class="flex h-7 items-center gap-1">
                        <CommonButton
                          variant="outline"
                          class="border-gray h-7 aspect-square flex justify-center items-center ring-1 border-none ring-gray rounded-tl rounded-bl hover:ring-semigreen group"
                        >
                          <IconsArrowDownIcon
                            class="rotate-90 text-2xl group-hover:ring-semigreen"
                          />
                        </CommonButton>
                        <input
                          type="number"
                          name="qty"
                          class="block w-full outline-none border-0 p-3 py-[0.3rem] max-h-7 h-full max-w-8 min-w-8 text-dark ring-1 text-sm ring-semigray bg-white placeholder:text-gray-400 focus:ring-1 focus:ring-semigreen [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                          placeholder="0"
                          maxlength="7"
                        />
                        <CommonButton
                          variant="outline"
                          class="border-gray h-7 aspect-square flex justify-center items-center ring-1 border-none ring-gray rounded-tr rounded-br hover:ring-semigreen group"
                        >
                          <IconsArrowDownIcon
                            class="-rotate-90 text-2xl group-hover:ring-semigreen"
                          />
                        </CommonButton>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-center justify-between text-sm"
                  >
                    <span class="text-lg text-semiblue"
                      >${{ product.price }}</span
                    >
                    <div class="flex gap-3">
                      <CommonButton
                        type="button"
                        variant="ghost"
                        class="font-medium flex items-center text-dark hover:opacity-80 hover:underline"
                      >
                        <span class="text-xs">Move to wish list</span>
                      </CommonButton>
                      <CommonButton
                        type="button"
                        variant="ghost"
                        class="font-medium text-semired hover:opacity-80"
                      >
                        <IconsTrashIcon class="text-2xl" />
                      </CommonButton>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full flex gap-3 py-3">
            <input
              type="text"
              name="couponCheckout"
              id="couponCheckout"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
              placeholder="AB123"
            />
            <CommonButton
              variant="fill"
              mode="normal"
              class="text-sm font-normal tracking-tight hover:opacity-80 transition-all"
            >
              Apply
            </CommonButton>
          </div>
          <div class="w-full flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <span class="text-sm tracking-tight font-semibold opacity-80"> Price </span>
              <span class="text-sm tracking-tight font-semibold opacity-80">
                ${{ totalOrder }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm tracking-tight font-semibold opacity-80"> Shipping </span>
              <span class="text-sm tracking-tight font-semibold opacity-80">
                ${{ shipping }}
              </span>
            </div>
            <div class="w-full flex flex-col gap-3 border-t border-gray py-3">
              <div class="flex justify-between items-center">
                <span class="text-lg tracking-tight font-bold opacity-90 text-dark"> Total </span>
                <span class="text-lg tracking-tight font-bold opacity-90 text-dark">
                  ${{ totalOrderPrice }}
                </span>
              </div>
              <CommonButton variant="fill" mode="normal" class="w-full hover:opacity-80 transition-all">
                Checkout
              </CommonButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useCheckoutStore} from "../../stores/useCheckout";
import {languages, products, imageSample, replacing, shipping} from "~/common";

const checkoutStore = useCheckoutStore();

const totalOrder = computed(() => checkoutStore.totalOrder);
const totalOrderPrice = computed(() => checkoutStore.totalOrderPrice);

const closeCheckout = () => {
  checkoutStore.closeCheckout();
};
</script>
